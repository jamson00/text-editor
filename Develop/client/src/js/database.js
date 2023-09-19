import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

const dbPromise = initdb();

export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const newItem = { content, timestamp: Date.now() };

  await store.add(newItem);

  console.log('Added to the database:', newItem);
};

export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  const allContent = await store.getAll();

  console.log('Retrieved from the database:', allContent);

  return allContent;
};
