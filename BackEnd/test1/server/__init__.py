import json
from typing import List

from bson import ObjectId
from fastapi import FastAPI

from models.section import Section, SectionDB
from models.utils import MongoJSONEncoder
from schema.account_schema import account_serializer
from models.AccountModel import AccountModel
from server.database import db, client
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

# import routers
# from server.routes.routes import router as user_router

# create FastAPI app
app = FastAPI()

origins = [
    # "http://localhost:3000",
    # "localhost:3000"
    "http://localhost:5173",
    "localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

"""
# ! TODO
@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(settings.DB_URL)
    app.mongodb = app.mongodb_client[settings.DB_NAME]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()
"""


# Add routers
# app.include_router(user_router)


@app.get("/hello/{name}")
async def say_hello(name: str):
    print("hi")
    return {"message": f"Hello {name}"}


# access the collections in database
collection_accounts = db["accounts"]
collection_customers = db["customers"]
collection_transactions = db["transactions"]


# Home routes
@app.get("/")
async def root():
    return {"message": "Hello World"}


demo_account: AccountModel = AccountModel(
    account_id=12345,
    limit=10000,
    products=["Derivatives", "InvestmentStock"],
)


# @app.get("/accounts")
# @app.get("/accounts", response_model=AccountModel)
@app.get("/accounts", response_model=List[AccountModel])
async def get_all_accounts():
    all_documents = collection_accounts.find()
    print("cursor object=", str(all_documents))

    test_account: AccountModel = collection_accounts.find_one()
    print("test_account", test_account)
    print("type of test_account:", type(test_account))

    print("demo_account=", demo_account)

    # data_json = MongoJSONEncoder().encode(list(all_documents))
    # data_json = MongoJSONEncoder().encode(list(test_account))
    data_json = MongoJSONEncoder().encode(test_account)
    print(type(data_json))

    print("data_json =", data_json)
    # return json.loads(data_json)
    # return test_account
    return all_documents


@app.get("/accounts/{num}", response_model=List[AccountModel])
async def few_accounts(num: int):
    all_documents = collection_accounts.find().limit(num)
    return all_documents


@app.get("/test")
async def testing_endpoint():
    collection_section = db["section"]

    data = {
        "title": "Lot info",
        "name": "Lot-34-5-13",
        "editable": True,
        "contract_date": datetime.now()
    }
    new_document = dict(Section(**data))

    print(" 🔥 new_document:", new_document)
    collection_section.insert_one(new_document)

    # print(collection_section)
    return "test ok"


@app.get("/test2", response_model=List[SectionDB])
async def test2_endpoint():
    collection_section = db["section"]
    all_docs = collection_section.find()
    # return all_docs
    one_doc = collection_section.find_one()
    return [one_doc]
