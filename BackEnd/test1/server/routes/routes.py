from fastapi import APIRouter

# from models.user import User
# from server.database import collections
# from schema.UserSchema import list_serial

router = APIRouter()


# GET request
@router.get("/users")
async def get_users():
    # users = list_serial(collections.find())
    # print("users = ", users)
    # return users
    return -1


# POST request
@router.post("/users")
async def new_user():
    return -2
    # test_user: User = User()
    # pass
