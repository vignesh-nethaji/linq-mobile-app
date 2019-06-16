import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Aggregation } from '../pages/aggregation/aggregation';
import { Conversion } from '../pages/conversion/conversion';
import { ElementPage } from '../pages/element/element';
import { Generation } from '../pages/generation/generation';
import { Grouping } from '../pages/grouping/grouping';
import { Join } from '../pages/join/join';
import { Introduction } from '../pages/introduction/introduction';
import { Ordering } from '../pages/ordering/ordering';
import { Other } from '../pages/other/other';
import { Partitioning } from '../pages/partitioning/partitioning';
import { Projection } from '../pages/projection/projection';
import { Quantifiers } from '../pages/quantifiers/quantifiers';
import { Restriction } from '../pages/restriction/restriction';
import { SetPage } from '../pages/set/set';

//Aggregate
import { AggregateSimplePage } from '../pages/aggregation/aggregate-simple/aggregate-simple';
import { AggregatSeedPage } from '../pages/aggregation/aggregate-seed/aggregate-seed';
import { AveragePage } from '../pages/aggregation/average/average';
import { CountPage } from '../pages/aggregation/count/count';
import { LongCountPage } from '../pages/aggregation/long-count/long-count';
import { MaxPage } from '../pages/aggregation/max/max';
import { MinPage } from '../pages/aggregation/min/min';
import { SumPage } from '../pages/aggregation/sum/sum';

//conversion
import { AsEnumerablePage } from '../pages/conversion/as-enumerable/as-enumerable';
import { CastPage } from '../pages/conversion/cast/cast';
import { OfTypePage } from '../pages/conversion/of-type/of-type';
import { ToArrayPage } from '../pages/conversion/to-array/to-array';
import { ToDictionaryCondPage } from '../pages/conversion/to-dictionary-cond/to-dictionary-cond';
import { ToDictionarySimplePage } from '../pages/conversion/to-dictionary-simple/to-dictionary-simple';
import { ToListPage } from '../pages/conversion/to-list/to-list';
import { ToLookUpPage } from '../pages/conversion/to-lookup/to-lookup';

//element
import { ElementAtPage } from '../pages/element/element-at/element-at';
import { ElementAtOrDefaultPage } from '../pages/element/element-at-or-default/element-at-or-default';
import { FirstCondPage } from '../pages/element/first-cond/first-cond';
import { FirstOrDefaultPage } from '../pages/element/first-or-default/first-or-default';
import { FirstSimplePage } from '../pages/element/first-simple/first-simple';
import { LastPage } from '../pages/element/last/last';
import { LastOrDefaultCondPage } from '../pages/element/last-or-default-cond/last-or-default-cond';
import { LastOrDefaultSimplePage } from '../pages/element/last-or-default-simple/last-or-default-simple';
import { SinglePage } from '../pages/element/single/single';
import { SingleOrDefaultPage } from '../pages/element/single-or-default/single-or-default';


//generation
import { DefaultIfEmptyDefaultValuePage } from '../pages/generation/default-if-empty-default-value/default-if-empty-default-value';
import { DefaultIfEmptySimplePage } from '../pages/generation/default-if-empty-simple/default-if-empty-simple';
import { EmptyPage } from '../pages/generation/empty/empty';
import { RangePage } from '../pages/generation/range/range';
import { RepeatPage } from '../pages/generation/repeat/repeat';

//grouping 
import { GroupByPage } from '../pages/grouping/group-by/group-by';

//join 
import { GroupJoinPage } from '../pages/join/group-join/group-join';
import { InnerJoinPage } from '../pages/join/inner-join/inner-join';


//ordering 
import { OrderByDatesPage } from '../pages/ordering/order-by-dates/order-by-dates';
import { OrderByDescendingPage } from '../pages/ordering/order-by-descending/order-by-descending';
import { OrderByNumbersPage } from '../pages/ordering/order-by-numbers/order-by-numbers';
import { OrderByObjectsPage } from '../pages/ordering/order-by-objects/order-by-objects';
import { ReversePage } from '../pages/ordering/reverse/reverse';
import { ThenByPage } from '../pages/ordering/then-by/then-by';
import { ThenByDescendingPage } from '../pages/ordering/then-by-descending/then-by-descending';

//other
import { ConcatNumbersPage } from '../pages/other/concat-numbers/concat-numbers';
import { ConcatStringsPage } from '../pages/other/concat-strings/concat-strings';
import { SequenceEqualPage } from '../pages/other/sequence-equal/sequence-equal';
import { ZipPage } from '../pages/other/zip/zip';

//partitioning
import { SkipPage } from '../pages/partitioning/skip/skip';
import { SkipWhilePage } from '../pages/partitioning/skip-while/skip-while';
import { TakePage } from '../pages/partitioning/take/take';
import { TakeWhilePage } from '../pages/partitioning/take-while/take-while';

//projection
import { SelectAnonymousPage } from '../pages/projection/select-anonymous/select-anonymous';
import { SelectIndexedPage } from '../pages/projection/select-indexed/select-indexed';
import { SelectManyCrossJoinPage } from '../pages/projection/select-many-cross-join/select-many-cross-join';
import { SelectSimplePage } from '../pages/projection/select-simple/select-simple';


//Quantifiers
import { AllPage } from '../pages/quantifiers/all/all';
import { AnyPage } from '../pages/quantifiers/any/any';
import { ContainsPage } from '../pages/quantifiers/contains/contains';

//Restriction
import { WhereIndexedPage } from '../pages/restriction/where-indexed/where-indexed';
import { WhereNumbersPage } from '../pages/restriction/where-numbers/where-numbers';
import { WhereObjectsPage } from '../pages/restriction/where-objects/where-objects';

//Set 
import { DistinctPage } from '../pages/set/distinct/distinct';
import { ExceptPage } from '../pages/set/except/except';
import { IntersectPage } from '../pages/set/intersect/intersect';
import { UnionPage } from '../pages/set/union/union';
import { PageInfoProvider } from '../providers/page-info/page-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Aggregation,
    Conversion,
    ElementPage,
    Generation,
    Grouping,
    Join,
    Introduction,
    Ordering,
    Other,
    Partitioning,
    Projection,
    Quantifiers,
    Restriction,
    SetPage,

    AggregateSimplePage,
    AggregatSeedPage,
    AveragePage,
    CountPage,
    LongCountPage,
    MaxPage,
    MinPage,
    SumPage,

    AsEnumerablePage,
    CastPage,
    OfTypePage,
    ToArrayPage,
    ToDictionaryCondPage,
    ToDictionarySimplePage,
    ToListPage,
    ToLookUpPage,

    ElementAtPage,
    ElementAtOrDefaultPage,
    FirstCondPage,
    FirstOrDefaultPage,
    FirstSimplePage,
    LastPage,
    LastOrDefaultCondPage,
    LastOrDefaultSimplePage,
    SinglePage,
    SingleOrDefaultPage,

    DefaultIfEmptyDefaultValuePage,
    DefaultIfEmptySimplePage,
    EmptyPage,
    RangePage,
    RepeatPage,

    GroupByPage,

    GroupJoinPage,
    InnerJoinPage,

    OrderByDatesPage,
    OrderByDescendingPage,
    OrderByNumbersPage,
    OrderByObjectsPage,
    ReversePage,
    ThenByPage,
    ThenByDescendingPage,

    ConcatNumbersPage,
    ConcatStringsPage,
    SequenceEqualPage,
    ZipPage,

    SkipPage,
    SkipWhilePage,
    TakePage,
    TakeWhilePage,

    SelectAnonymousPage,
    SelectIndexedPage,
    SelectManyCrossJoinPage,
    SelectSimplePage,

    AllPage,
    AnyPage,
    ContainsPage,

    WhereIndexedPage,
    WhereNumbersPage,
    WhereObjectsPage,

    DistinctPage,
    ExceptPage,
    IntersectPage,
    UnionPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Aggregation,
    Conversion,
    ElementPage,
    Generation,
    Grouping,
    Join,
    Introduction,
    Ordering,
    Other,
    Partitioning,
    Projection,
    Quantifiers,
    Restriction,
    SetPage,

    AggregateSimplePage,
    AggregatSeedPage,
    AveragePage,
    CountPage,
    LongCountPage,
    MaxPage,
    MinPage,
    SumPage,

    AsEnumerablePage,
    CastPage,
    OfTypePage,
    ToArrayPage,
    ToDictionaryCondPage,
    ToDictionarySimplePage,
    ToListPage,
    ToLookUpPage,

    ElementAtPage,
    ElementAtOrDefaultPage,
    FirstCondPage,
    FirstOrDefaultPage,
    FirstSimplePage,
    LastPage,
    LastOrDefaultCondPage,
    LastOrDefaultSimplePage,
    SinglePage,
    SingleOrDefaultPage,

    DefaultIfEmptyDefaultValuePage,
    DefaultIfEmptySimplePage,
    EmptyPage,
    RangePage,
    RepeatPage,

    GroupByPage,

    GroupJoinPage,
    InnerJoinPage,

    OrderByDatesPage,
    OrderByDescendingPage,
    OrderByNumbersPage,
    OrderByObjectsPage,
    ReversePage,
    ThenByPage,
    ThenByDescendingPage,

    ConcatNumbersPage,
    ConcatStringsPage,
    SequenceEqualPage,
    ZipPage,

    SkipPage,
    SkipWhilePage,
    TakePage,
    TakeWhilePage,

    SelectAnonymousPage,
    SelectIndexedPage,
    SelectManyCrossJoinPage,
    SelectSimplePage,

    AllPage,
    AnyPage,
    ContainsPage,

    WhereIndexedPage,
    WhereNumbersPage,
    WhereObjectsPage,

    DistinctPage,
    ExceptPage,
    IntersectPage,
    UnionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PageInfoProvider
  ]
})
export class AppModule {}
