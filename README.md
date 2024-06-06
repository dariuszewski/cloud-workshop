# Photo App

## Cloud Setup

### Serivce Account Permissions

```
{
  "bindings": [
    {
      "role": "roles/run.admin",
      "members": [
        "serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL"
      ]
    },
    {
      "role": "roles/viewer",
      "members": [
        "serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL"
      ]
    },
    {
      "role": "roles/storage.admin",
      "members": [
        "serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL"
      ]
    },
    {
      "role": "roles/cloudfunctions.admin",
      "members": [
        "serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL"
      ]
    },
    {
      "role": "roles/visionai.user",
      "members": [
        "serviceAccount:YOUR_SERVICE_ACCOUNT_EMAIL"
      ]
    }
  ]
}
```
