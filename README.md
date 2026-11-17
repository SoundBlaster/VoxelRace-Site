# Voxel Race website

Static EN/RU website for `https://egormerkushev.ru/voxelrace/`, following the same product-subdirectory approach as Dreams-Site and 7 of 10. Voxel Race is not yet published on the App Store.

- `voxelrace/index.html`: product landing page, using actual Release simulator captures.
- `voxelrace/support/`: support contact and answers.
- `voxelrace/privacy/`: proposed privacy policy, including Game Center and track sharing.

There is no build or dependency installation. Preview locally from the project root:

```sh
python3 -m http.server 8796 --bind 127.0.0.1 --directory website
```

Open `http://127.0.0.1:8796/voxelrace/?lang=en` or `?lang=ru`. Without JavaScript both language sections remain available. The language selection is carried in the URL; the site has no analytics, third-party scripts, or remote fonts.

## Deployment

The FTPS workflow `.github/workflows/deploy-website.yml` runs for changes under `website/voxelrace/` on `main` and supports manual dispatch. As with Dreams-Site it validates its target, verifies TLS and hostname, uploads without deleting remote files, and checks every published file against the deployment commit over HTTPS. It only targets `/www/egormerkushev.ru/voxelrace`, separate from the existing Dreams and 7 of 10 directories.

Configure the GitHub environment named `FTP` with these values:

| Kind | Name | Value |
| --- | --- | --- |
| Variable | `FTP_HOST` | `server209.hosting.reg.ru` |
| Variable | `FTP_PORT` | `21` |
| Variable | `FTP_USER` | Hosting username |
| Variable | `FTP_REMOTE_ROOT` | `/www/egormerkushev.ru/voxelrace` |
| Secret | `FTP_PASSWORD` | Hosting password |

Never add credentials to source. Verify the public pages after deployment before setting the marketing, support, and privacy URLs in App Store Connect. Review privacy copy and actual hosting/email practices when publishing.
