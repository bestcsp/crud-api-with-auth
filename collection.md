{
	"info": {
		"_postman_id": "f0843bde-1b86-4846-9fb0-9554a766a8b3",
		"name": "axon",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "localhost:5000/users/signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n\"firstname\":\"Chander\",\n\"lastname\":\"pandey\",\n \"email\":\"cs@gmail.com\", \n \"password\":\"Work@1csp\",\n \"address\":\"Gurgaon , Haryana\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:5000/users/signup",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"users",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "localhost:4001/signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"firstname\":\"harish\", \"lastname\":\"pandey\", \"email\":\"harish.pandey\",\n    \"mobile\":\"8080808081\",\n     \"password\":\"Work@1csp\",\n     \"address\":\"1df21as2d1f2as1df2as2 125f1as5f1 \"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4001/signup",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"signup"
					]
				},
				"description": "to signup"
			},
			"response": []
		},
		{
			"name": "localhost:4001/login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n     \"email\":\"harish.pandey\",\n     \"password\":\"Work@1csp\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4001/signin",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"signin"
					]
				}
			},
			"response": []
		},
		{
			"name": "localhost:4001/getAllUsers?pageSize=3",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMTM1ZGUyYzIxY2U2NGZmODVmZTgiLCJpYXQiOjE2Mzc5NDY1NjQsImV4cCI6MTYzNzk1MDE2NH0.LZ3NXq5lJ1UwzE4ZNk6AETrtPT9ghdHGETr0xrVVKQc",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"mobile\":\"8888888844\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4001/updateLoggedUserDetails",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"updateLoggedUserDetails"
					]
				}
			},
			"response": []
		},
		{
			"name": "localhost:4001/updateLoggedUserDetails",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMTM1ZGUyYzIxY2U2NGZmODVmZTgiLCJpYXQiOjE2Mzc5NDY1NjQsImV4cCI6MTYzNzk1MDE2NH0.LZ3NXq5lJ1UwzE4ZNk6AETrtPT9ghdHGETr0xrVVKQc",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"mobile\": \"8888888844\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4001/updateLoggedUserDetails",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"updateLoggedUserDetails"
					]
				}
			},
			"response": []
		},
		{
			"name": "localhost:4001/searchData?mobile=8888888844",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWExMTM1ZGUyYzIxY2U2NGZmODVmZTgiLCJpYXQiOjE2Mzc5NDY1NjQsImV4cCI6MTYzNzk1MDE2NH0.LZ3NXq5lJ1UwzE4ZNk6AETrtPT9ghdHGETr0xrVVKQc",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"mobile\": \"8888888844\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4001/searchData?mobile=8888888844",
					"host": [
						"localhost"
					],
					"port": "4001",
					"path": [
						"searchData"
					],
					"query": [
						{
							"key": "mobile",
							"value": "8888888844"
						}
					]
				}
			},
			"response": []
		}
	]
}