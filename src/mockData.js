export const scans = [
  {
    id: '1',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulns: { critical: 12, high: 23, medium: 18, low: 4 },
    lastScan: '4d ago',
  },
  {
    id: '2',
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 0,
    vulns: { critical: 12, high: 0, medium: 0, low: 0 },
    lastScan: '4d ago',
  },
  {
    id: '3',
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulns: { critical: 3, high: 5, medium: 4, low: 1 },
    lastScan: '3d ago',
  },
  {
    id: '4',
    name: 'Temp Data',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulns: { critical: 1, high: 2, medium: 0, low: 0 },
    lastScan: '3d ago',
  },
]

export const scanTopStats = {
  critical: { count: 86, change: 2.0 },
  high: { count: 16, change: 0.9 },
  medium: { count: 26, change: -0.9 },
  low: { count: 16, change: 0.9 },
}

export const activityLog = [
  {
    time: '09:00:00',
    text: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
  },
  {
    time: '09:01:00',
    text: 'Good! target is online. Now let me perform port scanning to identify running services.',
  },
  {
    time: '09:02:00',
    text: 'Excellent reconnaissance results - helpdesk.democorp.com Apache httpd 2.4.65 on port 80 web server. Let me probe the web server on target first to understand its structure.',
  },
  {
    time: '09:03:00',
    text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment TODO Delete the testing account testtest. Let me test this credential.',
  },
]

export const findings = [
  {
    id: 'f1',
    severity: 'Critical',
    code: '104523',
    title: 'SQL Injection in Authentication Endpoint',
    path: '/api/users/profile',
    description:
      'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    time: '2 mins ago',
  },
  {
    id: 'f2',
    severity: 'High',
    code: '104524',
    title: 'Unauthorized Access to User Metadata',
    path: '/api/auth/login',
    description:
      'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    time: '5 mins ago',
  },
  {
    id: 'f3',
    severity: 'Medium',
    code: '104525',
    title: 'Broken Authentication Rate Limiting',
    path: '/api/search',
    description:
      'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    time: '10 mins ago',
  },
]
