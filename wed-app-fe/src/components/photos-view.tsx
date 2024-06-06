import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function PhotosView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 lg:p-8">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 days ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            This is a beautiful photo from our wedding day. We're so happy to
            share it with our loved ones.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sarah Anderson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 week ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            Loving this photo of the bride and groom! Can't wait to see more
            from the wedding.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Emily Wilson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  3 weeks ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            Wow, this photo is stunning! The lighting and composition are
            perfect.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 month ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            This photo captures the joy and love of the day perfectly. I can't
            wait to see more!
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sarah Anderson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 months ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            I love the candid moments captured in this photo. The couple looks
            so happy!
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 lg:h-72">
          <img
            alt="Wedding Photo"
            className="object-cover w-full h-full"
            height={600}
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-950 rounded-full p-2 shadow-md">
            <HeartIcon className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Emily Wilson</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  3 months ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost">
                <DownloadIcon className="w-5 h-5" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ShareIcon className="w-5 h-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            This is such a beautiful and romantic photo. I can't wait to see the
            rest of the wedding album!
          </p>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
