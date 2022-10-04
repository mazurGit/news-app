import React, {FC} from 'react';
import {ScreenWrapper, FlatList} from '~/components/components';
import {Article} from './components/components';
import {useEffect, useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {newsApi} from '~/store/actions';
import {selectArticles} from '~/store/selectors';
import {Countries} from '~/common/enums/enums';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  useEffect(() => {
    dispatch(newsApi.getPopularNews({country: Countries.UKRAINE}));
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Article
              articleData={item}
              contentContainerStyle={{marginTop: 10}}
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export {Home};
