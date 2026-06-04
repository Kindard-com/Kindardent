import { NextRequest, NextResponse } from "next/server";
import { turso, initDb } from "@/lib/turso";

// GET /api/profile?wallet=0x...
export async function GET(req: NextRequest) {
  const wallet = req.nextUrl.searchParams.get("wallet");
  if (!wallet) {
    return NextResponse.json({ error: "wallet required" }, { status: 400 });
  }

  await initDb();

  const result = await turso.execute({
    sql: "SELECT * FROM user_profiles WHERE wallet_address = ?",
    args: [wallet.toLowerCase()],
  });

  if (result.rows.length === 0) {
    return NextResponse.json({ profile: null });
  }

  const row = result.rows[0];
  return NextResponse.json({
    profile: {
      wallet_address: row.wallet_address,
      display_name: row.display_name,
      email: row.email,
      avatar_data: row.avatar_data,
      banner_data: row.banner_data,
    },
  });
}

// POST /api/profile
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { wallet, display_name, email, avatar_data, banner_data } = body;

  if (!wallet) {
    return NextResponse.json({ error: "wallet required" }, { status: 400 });
  }

  await initDb();

  await turso.execute({
    sql: `
      INSERT INTO user_profiles (wallet_address, display_name, email, avatar_data, banner_data, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(wallet_address) DO UPDATE SET
        display_name = excluded.display_name,
        email        = excluded.email,
        avatar_data  = excluded.avatar_data,
        banner_data  = excluded.banner_data,
        updated_at   = excluded.updated_at
    `,
    args: [
      wallet.toLowerCase(),
      display_name || "",
      email || "",
      avatar_data || "",
      banner_data || "",
      new Date().toISOString(),
    ],
  });

  return NextResponse.json({ success: true });
}
