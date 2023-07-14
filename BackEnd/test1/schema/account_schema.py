def account_serializer(account) -> dict:
    return {
        "_id": str(account["_id"]),
        "account_id": account["account_id"],
        "limit": account["limit"],
        "products": account["products"]
    }
