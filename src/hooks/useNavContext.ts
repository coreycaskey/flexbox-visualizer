import { useContext } from 'react';

import { NavContext } from 'utils/NavProvider';

export const useNavContext = () => useContext(NavContext);
