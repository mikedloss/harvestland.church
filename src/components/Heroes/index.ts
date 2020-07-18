import { GroupHero, GroupHeroProps } from './GroupHero';
import { ImageHero, ImageHeroProps } from './ImageHero';
import { Side2SideHero, Side2SideHeroProps } from './Side2SideHero';
import { TextHero, TextHeroProps } from './TextHero';
import { VideoHero, VideoHeroProps } from './VideoHero';

export interface HeroCollection {
  Group: React.FC<GroupHeroProps>;
  Image: React.FC<ImageHeroProps>;
  Side2Side: React.FC<Side2SideHeroProps>;
  Text: React.FC<TextHeroProps>;
  Video: React.FC<VideoHeroProps>;
}

export const Hero: HeroCollection = {
  Group: GroupHero,
  Image: ImageHero,
  Side2Side: Side2SideHero,
  Text: TextHero,
  Video: VideoHero,
};
