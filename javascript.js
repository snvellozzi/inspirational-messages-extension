//creates array of quotes
(function() {
    
var messages = [
    'You are amazing!', 'Conquer the difficulties.', "Keep looking up!", "You've got this!", 'Breathe. You are ready for anything.',
    'Don\'t doubt yourself.', 'Explore. Create. Innovate. Inspire.', 'Keep your eyes open for what today will bring.', 
    'Keep on striving for the best.', 'Take another step forward.', 'Don\'t let anyone stop you. And also, don\'t stop yourself.', 
    'Stay happy. Stay optimistic. Stay YOU.', 'Don\'t forget to smile :)', 'Breathe. Relax. Destress. You got this.',
    'Keep thinking toward your future goals.', 'Remember to stay positive.', 'Keep standing up for what you believe in.', 
    'Trust yourself', 'Find happiness everywhere.', 'Only you can control your own happiness.', 
    'Take some time for yourself to appreciate how strong you are', 'Don\'t be afraid to take an unconventional path for something you wholly believe in.',
    'Follow your intuition. You know yourself well.', 'You are strong enough to overcome anything.', 'Think about your goals. Keep working toward them',
    'Stay hopeful and happy.', 'The possibilities are endless. Go for it.', 'Work to improve the world.', 'Go for it!', 'Don\'t let anything hold you back from achieving your dreams.',
    'Don\'t forget who you are.', 'Take it all in.', 'Keep going after what you believe in.', 'Stay on your feet.',
];

//randomly generates quote from message array
function newMessages(newArr){
    return newArr[Math.floor(Math.random() * messages.length)];
}
//displays quote on popup
window.onload = function(){
    var randMessage = newMessages(messages);
    document.getElementById('messageDisplay').innerHTML = randMessage;
};

}) ();