
import { Challenge } from '../../types';
import { javascriptSolution, pythonSolution } from './solutions';
import { metadata, hints, steps } from './metadata';

export const ticTacToeChallenge: Challenge = {
  ...metadata,
  solutions: {
    javascript: javascriptSolution,
    python: pythonSolution
  },
  hints,
  steps
};
