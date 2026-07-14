┌──────────────────┐     ┌────────────────────┐     ┌──────────────────────┐
│  Read first char  │ ──► │ letter / _ / $ ?    │ ──► │ Read remaining chars │
│                    │     │ NO → SyntaxError    │     │ letters/digits/_/$ ? │
└──────────────────┘     └────────────────────┘     │ NO → SyntaxError      │
                                                        └──────────────────────┘
                                                                   │
                                                                   ▼
                                                     ┌─────────────────────────┐
                                                     │ Is it a reserved         │
                                                     │ keyword (if/class/...)? │
                                                     │ YES → SyntaxError        │
                                                     │ NO  → Valid identifier   │
                                                     └─────────────────────────┘