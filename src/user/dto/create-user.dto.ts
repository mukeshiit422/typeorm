import { Profile } from "src/profile/entities/profile.entity";

export class CreateUserDto {
   id: number;
   name: string;
   profile: Profile;
}
