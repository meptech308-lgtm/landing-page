import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: 'projects/:id',
    renderMode: RenderMode.Server, // prevents prerender error
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
