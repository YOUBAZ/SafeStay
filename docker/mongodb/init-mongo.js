// MongoDB Initialization Script for SafeStay

db = db.getSiblingDB('safestay_chat');

// Create collections
db.createCollection('chat_messages');
db.createCollection('activity_logs');
db.createCollection('search_history');

// Create indexes for chat_messages
db.chat_messages.createIndex({ conversation_id: 1, created_at: -1 });
db.chat_messages.createIndex({ sender_id: 1 });
db.chat_messages.createIndex({ recipient_id: 1, is_read: 1 });

// Create indexes for activity_logs
db.activity_logs.createIndex({ user_id: 1, created_at: -1 });
db.activity_logs.createIndex({ action: 1 });
db.activity_logs.createIndex({ entity_type: 1, entity_id: 1 });

// Create indexes for search_history
db.search_history.createIndex({ user_id: 1, created_at: -1 });

print('SafeStay MongoDB initialized successfully!');
