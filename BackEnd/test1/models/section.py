"""
Define the model of document `section`
"""
from bson import ObjectId
from pydantic import BaseModel, Field, field_serializer
from datetime import date, datetime


class Section(BaseModel):
    title: str = Field(...)
    name: str = Field(...)
    editable: bool = Field(...)
    contract_date: datetime = Field(...)

    @field_serializer('contract_date')
    def serialize_contract_date(self, contract_date: date, _info):
        return str(contract_date)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True


class SectionDB(BaseModel):
    id: ObjectId = Field(default_factory=ObjectId, alias="_id")
    title: str = Field(...)
    name: str = Field(...)
    editable: bool = Field(...)
    contract_date: datetime = Field(...)

    @field_serializer('id')
    def serialize_id(self, _id: ObjectId, _info):
        return str(_id)

    @field_serializer('contract_date')
    def serialize_contract_date(self, contract_date: date, _info):
        return str(contract_date)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
