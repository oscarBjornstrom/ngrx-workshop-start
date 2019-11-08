
import {createAction, props} from '@ngrx/store';
import {Profile} from '../../components/profile/profile.model';

export const setProfile = createAction('[Profile] setProfile', props<{profile: Profile}>());
