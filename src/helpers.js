/*eslint-disable*/
export const feedbackGenerator = difference => {
  let feedback;
  switch(true) {
    case difference >= 50:
    	return feedback = 'You\'re Ice Cold...';
    break;

    case difference >= 30:
    	return feedback = 'You\'re cold...';
		break;

    case difference >= 10:
    	return feedback = 'You\'re Warm...';
		break;

    case difference >= 1:
    	return feedback = 'You\'re Hot!';
		break;

    case difference === difference:
    	return feedback = 'You got it!';
		break;

    default:
    return feedback = 'Make a guess';
  }
}
