import React, {FC} from 'react';
import {ScreenWrapper, FlatList, Spinner} from '~/components/components';
import {Article} from './components/components';
import {useEffect, useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {newsApi} from '~/store/actions';
import {selectArticles} from '~/store/selectors';
import {Countries, DtoStatus} from '~/common/enums/enums';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const page = useAppSelector(state => state.newsReducer.page);
  const dataStatus = useAppSelector(state => state.newsReducer.status);
  const isLoading = dataStatus === DtoStatus.PENDING;
  useEffect(() => {
    dispatch(newsApi.getPopularNews({country: Countries.UKRAINE, page}));
  }, []);
  const onEndReached = () => {
    dispatch(newsApi.getPopularNews({country: Countries.UKRAINE, page}));
  };

  return (
    <ScreenWrapper>
      <FlatList
        ListFooterComponent={isLoading ? <Spinner /> : null}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
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
