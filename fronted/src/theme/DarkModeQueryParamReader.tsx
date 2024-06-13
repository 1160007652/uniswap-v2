import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'qs';
import { AppDispatch } from '../state';
import { updateUserDarkMode } from '../state/user/actions';
import { useLocation } from 'react-router-dom';

export default function DarkModeQueryParamReader(): null {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!location.search) return;
    if (location.search.length < 2) return;

    const parsed = parse(location.search, {
      parseArrays: false,
      ignoreQueryPrefix: true,
    });

    const theme = parsed.theme;

    if (typeof theme !== 'string') return;

    if (theme.toLowerCase() === 'light') {
      dispatch(updateUserDarkMode({ userDarkMode: false }));
    } else if (theme.toLowerCase() === 'dark') {
      dispatch(updateUserDarkMode({ userDarkMode: true }));
    }
  }, [dispatch, location.search]);

  return null;
}
