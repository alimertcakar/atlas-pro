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
      if (document.body.classList.contains('atlassian_pro_enabled')) {
        document.body.classList.remove('atlassian_pro_enabled');
      } else {
        document.body.classList.add('atlassian_pro_enabled');
      }
      return { ...val, isEnabled: val?.isEnabled ? false : true };
    });
  },
};

export default mainStorage;
