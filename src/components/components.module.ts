import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { ProfileComponent } from './profile/profile';
import { LocationComponent } from './location/location';
@NgModule({
	declarations: [SearchComponent,
    ProfileComponent,
    LocationComponent],
	imports: [],
	exports: [SearchComponent,
    ProfileComponent,
    LocationComponent]
})
export class ComponentsModule {}
