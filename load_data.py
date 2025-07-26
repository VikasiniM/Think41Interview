import pandas as pd
from sqlalchemy.orm import Session
from db import SessionLocal, engine
from models import Base, Product

# 1. Create tables
Base.metadata.create_all(bind=engine)

# 2. Load CSV
df = pd.read_csv("data/products.csv")  # Replace with your CSV path

# 3. Populate DB
db: Session = SessionLocal()
for _, row in df.iterrows():
    product = Product(
        name=row["name"],
        description=row.get("description", ""),
        price=float(row["price"]),
        stock=int(row["stock"]),
        category=row.get("category", ""),
        created_at=row.get("created_at", None),
    )
    db.add(product)
db.commit()
db.close()
print("Loaded products into the database.")