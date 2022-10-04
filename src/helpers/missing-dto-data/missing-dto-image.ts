import {images} from '~/assets/assets';

const placeDefaultImage = (imageUrl: string) => {
  if (imageUrl) {
    return {uri: imageUrl};
  }
  return images.article_no_image;
};

export {placeDefaultImage};
