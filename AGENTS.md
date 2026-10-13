<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Clinic prototype architecture
- Keep shared demo booking state in the root-mounted DemoProvider, in memory only, because this prototype must not store real patient data or implement authentication.
- Keep editable clinic details and translations in the shared clinic-demo module so branding and local copy remain consistent across pages.
- Use individual TanStack content routes with leaf metadata; patient booking passes specialty and doctor through validated search parameters.
- Store original uploaded media as asset pointers; import pointer URLs in the UI to reuse clinic imagery without source-controlling binaries.
