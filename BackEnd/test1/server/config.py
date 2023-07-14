from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_uri: str = ""
    database_name: str = ""

    host: str = ""
    port: int = -1
    debug_mode: bool = False

    class Config:
        env_file = ".env"


settings = Settings()
