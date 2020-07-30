# Todo-List-Task

Steps for run app : -
   use npm i ( for install node_module)
   
   for run android use npm run android
    if not work please clean build folder once using command cd android && ./gradlew clean && cd ..
   
   for ios install pod file using command cd ios && pod install && cd ..
    to run app use command npm run ios
    
About App : -
    It is a simple to do list application where you can add new item , mark task to complete, undo task and delete task.
    
    At landing screen, if you have not any item inside pending or completed list then you will see msg please add new todo item.
    
    By using bottom right icon you can add new item.
    
    New item should be display in pending list, you can click on tick mark if you beleive task has been achieved.
    
    After task complete item will display insile completed items list
      There you can undo item, if you beleive task has not been done. It will go back to the pending items.
      
      2nd icon will be for delete item. If you beleive task completed then using delete button you can remove task from list.
