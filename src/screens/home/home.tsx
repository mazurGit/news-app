import React, {FC, useCallback} from 'react';
import {ScreenWrapper, FlatList, Spinner} from '~/components/components';
import {Article} from './components/components';
import {useEffect, useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {newsApi} from '~/store/actions';
import {selectArticles} from '~/store/selectors';
import {DtoStatus} from '~/common/enums/enums';
import {NewsDto} from '~/common/types/types';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const page = useAppSelector(state => state.newsReducer.page);
  const dataStatus = useAppSelector(state => state.newsReducer.status);
  const isLoading = dataStatus === DtoStatus.PENDING;
  useEffect(() => {
    dispatch(newsApi.getPopularNews());
  }, []);
  const onEndReached = () => {
    dispatch(newsApi.getPopularNews());
  };

  const renderItem = useCallback(
    ({item}: {item: NewsDto}) => {
      return (
        <Article articleData={item} contentContainerStyle={{marginTop: 10}} />
      );
    },
    [articles],
  );
  const keyExtractor = useCallback((item: NewsDto) => item.id, [articles]);
  return (
    <ScreenWrapper>
      <FlatList
        ListFooterComponent={isLoading ? <Spinner /> : null}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
        data={articles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
};

export {Home};
