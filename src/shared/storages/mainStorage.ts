import { StorageType, createStorage } from '@src/shared/storages/base';

const storage = createStorage(
  'atlassian-pro-storage',
  {
    isEnabled: true,
  },
  {
    storageType: StorageType.Local,
    liveUpdate: true,
  },
);

const mainStorage = {
  ...storage,
  toggle: async () => {
    await storage.set(val => {
      return { ...val, isEnabled: val?.isEnabled ? false : true };
    });
  },
};

export default mainStorage;

mainStorage.subscribe(async () => {
  if (window.location.host !== 'bitbucket.org') return;
  const storage = await mainStorage.get();
  const isEnabled = storage?.isEnabled;
  if (isEnabled) {
    document.body.classList.add('atlassian_pro_enabled');
  } else {
    document.body.classList.remove('atlassian_pro_enabled');
  }
});
