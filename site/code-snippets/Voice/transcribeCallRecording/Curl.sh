curl 'https://voice.bandwidth.com/api/v2/accounts/$BW_ACCOUNT_ID/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d/recordings/r-d68201ef-d53e-4c6d-a743-1c1283909d41/transcription' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "callbackUrl": "http://example.com",
        "callbackMethod": "POST",
        "username": "string",
        "password": "string",
        "tag": "string",
        "callbackTimeout": 0"
    }'
