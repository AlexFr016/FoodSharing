import React from 'react';

import SearchInput from '../../ui/Search/SearchInput';
import All from '../../ui/Search/All';
import TopSearchLine from '../../ui/Search/TopSearchLine';
import RequestCards from '../../ui/Search/RequestCards';
import BodySearch from '../../ui/Search/BodySearch';

export default function SearchPage(): JSX.Element {
  return (
    <>
      <TopSearchLine />
      <BodySearch />
    </>
  );
}
