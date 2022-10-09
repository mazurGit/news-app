import React, {FC} from 'react';
import {
  ScreenWrapper,
  FlatList,
  Text,
  RefreshControl,
} from '~/components/components';
import {Article} from './components/components';
import {
  useEffect,
  useAppDispatch,
  useAppSelector,
  useCallback,
  useRef,
} from '~/hooks/hooks';
import {newsActions} from '~/store/actions';
import {
  selectArticles,
  selectFilters,
  selectDataStatus,
  selectTotalResults,
} from '~/store/selectors';
import {DtoStatus} from '~/common/enums/enums';
import {NewsDto, NewsQuery, RootState} from '~/common/types/types';
import {removeObjectFalsyFields} from '~/helpers/helpers';
import {styles} from './styles';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const dataStatus = useAppSelector(selectDataStatus);
  const filters = useAppSelector(selectFilters);
  const totalResults = useAppSelector(selectTotalResults);
  const isLoading = dataStatus === DtoStatus.PENDING;
  const canEndReachBeTriggered = useRef(false);
  const scrollLoadNews = useCallback(() => {
    dispatch(
      newsActions.getNews(
        removeObjectFalsyFields<RootState['filtersReducer'], NewsQuery>(
          filters,
        ),
      ),
    );
  }, [filters]);
  const updateNews = useCallback(() => {
    dispatch(newsActions.resetNews());
    scrollLoadNews();
  }, [filters]);
  useEffect(() => {
    updateNews();
  }, []);

  const renderItem = useCallback(
    ({item}: {item: NewsDto}) => {
      return (
        <Article
          articleData={item}
          contentContainerStyle={styles.itemContainer}
        />
      );
    },
    [articles],
  );
  const keyExtractor = useCallback((item: NewsDto) => item.id, [articles]);

  return (
    <ScreenWrapper>
      <FlatList
        ListEmptyComponent={
          <Text style={styles.emptyList}>
            There are no articles with requested parameters
          </Text>
        }
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (
            canEndReachBeTriggered.current &&
            totalResults < articles.length
          ) {
            scrollLoadNews();
          }
        }}
        onScrollBeginDrag={() => {
          canEndReachBeTriggered.current = true;
        }}
        data={articles}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        scrollEnabled={isLoading ? false : true}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={updateNews} />
        }
      />
    </ScreenWrapper>
  );
};

export {Home};
