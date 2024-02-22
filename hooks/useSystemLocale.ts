import { useCallback, useState } from 'react';

import { useAppStateChange } from '@onekeyhq/kit/hooks/useAppStateChange';
import { getDefaultLocale } from '@onekeyhq/shared/locale/getDefaultLocale';

export function useSystemLocale() {
  const [locale, setLocale] = useState<string>(getDefaultLocale());
  const onChange = useCallback(() => {
    setLocale(getDefaultLocale());
  }, []);
  useAppStateChange(onChange);
  return locale;
}
