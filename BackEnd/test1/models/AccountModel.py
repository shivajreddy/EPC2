"""
This is the database models
"""
from typing import Any
from bson import ObjectId
from pydantic import BaseModel, Field, model_serializer, field_serializer

from models.utils import PyObjectId


class AccountModel(BaseModel):
    # id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    id: ObjectId = Field(default_factory=ObjectId, alias="_id")
    account_id: int = Field(...)
    limit: int = Field(...)
    products: list[str] = Field(...)

    @field_serializer('id')
    def serialize_dt(self, _id: ObjectId, _info):
        return str(_id)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
