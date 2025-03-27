import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpAuthServiceService } from './app/services/http/http-auth-service.service';
import { authInterceptor } from './app/interceptors/auth.interceptor';
// ✅ Correct way to merge appConfig with additional providers
// bootstrapApplication(AppComponent, {
//   ...appConfig, // Spread existing appConfig properties
//   providers: [
//     ...appConfig.providers || [], // Keep existing providers if any
//     provideHttpClient(withInterceptors([authInterceptor])),// ✅ Provide HttpClient globally
//     // provideHttpClient(withInterceptors([authInterceptor]))
//   ]
bootstrapApplication(AppComponent, appConfig
).catch((err) => console.error(err));