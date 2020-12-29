# webhookRelay
[IFTTT](https://ifttt.com/home) frequently fails with "Too many requests to this host" error when posting directly to [Discord](https://discord.com) [webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
This simple [Lambda](https://aws.amazon.com/lambda/) function is a proxy that relays the webhook requests from IFTTT to Discord to avoid that error.

IFTT => webhookRelay => Discord

## Usage
Send the IFTTT webhook event to the Lambda URL instead of straight to Discord.  Add the "relay" parameter to the webhook body and the Lambda will forward the request there.

```
{
	"relay": "https://discord.com/api/webhooks/123/abc/345",
	"author": "Demo",
	"avatar_url": "http://localhost/avatar.png",
	"content": "Demo"
}
```

## Build
npm install<br />
npm run-script build
