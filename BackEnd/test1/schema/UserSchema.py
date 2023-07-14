import bson as bson
from pydantic import BaseModel

from models.user import User


class UserSchema(BaseModel):
    _id: bson.objectid


def individual_serial(user) -> dict:
    return {
        "id": str(user["_id"]),
        "first_name": user["name"],
        "last_name": user["age"]
    }


def list_serial(users) -> list:
    return [individual_serial(user) for user in users]

# def add_user(user: User):
