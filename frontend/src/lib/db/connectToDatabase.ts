import { Db, MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  const url = process.env.MONGO_URI;
  const databaseName = process.env.MONGO_DB_NAME;

  if ((cachedClient && cachedDb) || !url) {
    // Если клиент и база данных уже закешированы, возвращаем их
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Иначе создаем новое соединение
    const client = await MongoClient.connect(url);

    const db = client.db(databaseName);

    // Сохраняем клиент и базу данных в кеш
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.log("error", error);

    return { client: cachedClient, db: cachedDb };
  }
}
export async function connectClientPromise() {
  const url = process.env.MONGO_URI;

  if ((cachedClient && cachedDb) || !url) {
    return cachedClient;
  }

  try {
    // Иначе создаем новое соединение
    const client = await MongoClient.connect(url);

    // Сохраняем клиент и базу данных в кеш
    cachedClient = client;

    return client;
  } catch (error) {
    console.log("error", error);

    return cachedClient;
  }
}

// Отключение от базы данных при завершении приложения
async function closeDatabaseConnection() {
  const { client } = await connectToDatabase();

  if (client) {
    client.close();
  }
}

// Обработка сигналов завершения
process.on("SIGINT", closeDatabaseConnection);
process.on("SIGTERM", closeDatabaseConnection);
