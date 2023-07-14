from pymongo import MongoClient
import certifi

from server.config import settings

# database_uri = "mongodb+srv://sreddy:2XaYRypTqawBsJSg@cluster0.awu6eyr.mongodb.net/?retryWrites=true&w=majority"

database_uri = settings.database_uri

print("database_uri=", database_uri)

client = MongoClient(database_uri, tlsCAFile=certifi.where())

try:
    client.admin.command("ping")
    print("Pinged deployment: ✅")
except Exception as e:
    print("❌", e)

database_name = settings.database_name

db = client[database_name]
