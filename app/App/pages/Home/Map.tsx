import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { MapView } from '../../components';

interface Props {}

export const Map: React.FC<Props> = (props) => {
  const location = useSelector(
    (state: RootState) => state.locationReducer.data,
  );
  return <MapView location={location} />;
};
