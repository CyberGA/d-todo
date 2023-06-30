export const CONTRACT_ADDRESS = "0xDaB01C3eF8755de0c72F6aB94579628d096A86F5";
export const CONTRACT_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "desc",
          "type": "string"
        }
      ],
      "name": "TodoAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        }
      ],
      "name": "addTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]