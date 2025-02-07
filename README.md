Section A: General Knowledge

1. When developing financial applications, security is crucial because any vulnerability can lead to fraud, data breaches, and loss of trust. 
Using HTTPS, secure authentication methods like OAuth and MFA, and encrypting sensitive data both in transit and at rest are essential. 
It's also important to protect against common attacks like SQL injection, XSS, and CSRF while ensuring proper session management and access 
controls based on the principle of least privilege.

2. Compliance standards like PCI-DSS and GDPR are critical in financial applications because they set the baseline for security and data privacy. 
PCI-DSS ensures that payment data is handled securely to prevent fraud and breaches, while GDPR focuses on protecting user privacy, requiring explicit 
consent for data collection and the right to have data deleted. Following these standards not only helps protect users but also prevents legal 
and financial consequences for businesses.

3. Idempotency in financial transactions is essential because it ensures that if the same request is sent multiple times, it won’t result in duplicate 
charges or unintended side effects. For example, if a user submits a payment but their internet connection drops, and they hit the button again, the 
system should recognize it as the same transaction and process it only once. This is usually handled by assigning a unique transaction ID and checking if 
it has already been processed before completing the request.

4. Handling sensitive customer data comes with serious risks, such as data breaches, unauthorized access, and accidental exposure. To mitigate these risks, 
financial apps should encrypt data, enforce strong authentication, and apply strict access controls. On the frontend, it’s important to never expose 
sensitive information in the UI or network requests. Man-in-the-middle attacks can also be a threat, so using TLS encryption and secure APIs is a must to keep data safe.



Section B: Theoretical Questions

1. How would you ensure the UI/UX of a banking web application is both user-friendly and secure?
To make a banking app user-friendly, I usually  focus on simplicity and clarity.
For example, I’d use clean layouts, easy-to-read fonts, and intuitive navigation so users can find things like account balances or transfer options quickly. 
I’d also make sure it works well on all devices in functionality and responsiveness(phones, tablets, and desktops). 
For security, I’d add features like multi-factor authentication (MFA) to verify users, encrypt sensitive data, and set up automatic logouts after inactivity. 
It’s all about balancing ease of use with strong protections to keep users’ data safe.

2. Explain the role of form validation and data masking in financial applications.
I consider form validation is like a safety Net. It checks if users enter the right info, like a valid account number or correct date format, before they submit anything. It also blocks harmful inputs, like scripts hackers might try to sneak in. Data masking, on the other hand, hides sensitive info from view. For example, instead of showing a full credit card number, it might display "**** 1234." Both are however important for keeping data accurate, secure, and private.

3. Discuss strategies for handling real-time data updates (e.g., account balance changes) in a React application.
For real-time updates, I’d use WebSockets because they let the server push updates to the client instantly like when your account balance changes after a transaction. 
If WebSockets is too heavy for that usecase, I might use Server-Sent Events (SSE) for one-way updates or even simple polling, where the app checks the server for updates every few seconds. On the React side, I’d manage the data with state tools like Redux or Context API to make sure the UI updates smoothly. 
Sometimes, I’d even use optimistic UI—showing the update right away while waiting for the server to confirm—to make the app feel faster.

4. What are Progressive Web Apps (PWAs), and how can they benefit a financial institution?
PWAs are websites that act like apps. They’re fast, work offline, and can even send push notifications. For a bank, this means customers can use the app on any device without downloading anything from an app store. It’s cheaper to build and maintain than native apps, and updates happen automatically. Plus, features like offline access let users check balances or recent transactions even without internet. It’s a win-win for users and easier for the bank.