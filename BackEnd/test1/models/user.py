"""
Schema Design
"""
from bson import ObjectId
from pydantic import BaseModel, Field, EmailStr

'''
User
    - first_name : required
    - last_name : optional
'''


class User(BaseModel):
    first_name: str
    last_name: str

# class UserModel(BaseModel):
#     id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
#     first_name: str = Field(...)
#     last_name: str = Field()
#
#     class Config:
#         schema_extra = {
#             "example": {
#             }
#         }
