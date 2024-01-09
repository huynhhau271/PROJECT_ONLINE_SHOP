 SELECT NAME, IS_IDENTITY, SEED_VALUE, INCREMENT_VALUE FROM [sys].[identity_columns]
   WHERE object_id = OBJECT_ID('Categories')
      AND [name] = 'Id'
      AND [seed_value] = 1
      AND [increment_value] = 1