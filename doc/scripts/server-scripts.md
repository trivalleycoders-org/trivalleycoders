# Import & Export from MongoDB

**Assumes you are running a local instance of MongoDB on localhost://27017**


## Notes
- This script will drop all data from the tvcwebsite database and refresh it with the contents of the /dump directory
- Script will not be using credentials. If your MongoDB config requires credentials this script may fail.



## Execute on Linux & Mac
$ change directory to /server/scripts
$ ./tvcwebsite.refresh.sh


## For import use: mongorestore
$ mongorestore -d tvcwebsite --drop --dir /dump

## For export use: mongodump
$ mongodump -d tvcwebsite


#### mongodump - scratch
--host (will use localhost:27017 by default
--port (ditto)

-u klequis
-p klequis
-d tvcwebsite
-c (collection?)
-o (out - is a path to a directory)


#### mongorestore - scratch
- Will recreate indexes recorded by mongodump

--host (will use localhost:27017 by default
--port (ditto)
-u klequis
-p klequis
-d tvcwebsite 
--drop (drops all and only collections that are in /dump
