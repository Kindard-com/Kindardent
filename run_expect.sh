#!/usr/bin/expect -f
set timeout 30
spawn npm run dev
expect {
    "rename table" {
        send "\r"
        exp_continue
    }
    "Compiling /api/seed" {
        exp_continue
    }
    timeout {
        puts "Timeout reached. Assuming server is up."
    }
}
interact
