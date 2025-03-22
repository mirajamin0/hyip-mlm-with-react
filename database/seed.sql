USE bigcom;

-- Insert Default Admin
INSERT INTO users (username, password, role, balance, referralCode) 
VALUES ('admin', '$2a$10$encryptedpasswordhash', 'admin', 0, 'ADMIN123');

-- Insert Sample Users
INSERT INTO users (username, password, role, balance, referralCode, referredBy) 
VALUES 
('user1', '$2a$10$encryptedpasswordhash', 'user', 50, 'USER123', NULL),
('user2', '$2a$10$encryptedpasswordhash', 'user', 100, 'USER456', 1),
('user3', '$2a$10$encryptedpasswordhash', 'user', 200, 'USER789', 2);

-- Insert Sample Transactions (Deposits & Withdrawals)
INSERT INTO transactions (userId, amount, type, status, paymentMethod) 
VALUES 
(1, 100, 'deposit', 'approved', 'QR Code'),
(2, 50, 'deposit', 'pending', 'Wallet Transfer'),
(3, 30, 'withdrawal', 'approved', 'Bank Transfer');

-- Insert Sample Tasks (Products)
INSERT INTO tasks (name, price, commission, available) 
VALUES 
('Task 1 - Social Media Like', 10, 2, TRUE),
('Task 2 - Product Review', 20, 5, TRUE),
('Task 3 - Blog Commenting', 15, 3, TRUE);

-- Insert Sample Referral Data
INSERT INTO referrals (referrerId, referredUserId, commissionEarned) 
VALUES 
(1, 2, 5),
(2, 3, 10);

-- Insert Sample Activity Logs
INSERT INTO activity_logs (userId, action, details) 
VALUES 
(1, 'User Registration', 'Admin created user1'),
(2, 'Deposit Request', 'User2 requested deposit of $50'),
(3, 'Task Completed', 'User3 completed Task 2');

-- Insert Default Commission Settings
INSERT INTO commission_settings (referralCommission) VALUES (5);
