'use client';

interface VideoDemoProps {
  onClose: () => void;
}

export function VideoDemo({ onClose }: VideoDemoProps) {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">PayYoyo Wallet Demo</h3>
        <p className="text-gray-600">See how autonomous payments work in action.</p>
      </div>

      {/* Placeholder for video - in a real app this would be an embedded YouTube/Vimeo video */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-6">
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-[#1E40AF] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Demo Video Coming Soon</p>
            <p className="text-sm text-gray-500 mt-1">
              We're building something amazing for you!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-[#1E40AF] mb-2">What to expect:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• AI-powered gift card tracking</li>
            <li>• Automatic payment optimization</li>
            <li>• GPS-enabled merchant discovery</li>
            <li>• Seamless checkout integration</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => alert('Coming soon! Subscribe to our newsletter for demo updates.')}
            className="flex-1 bg-[#1E40AF] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors"
          >
            Notify Me When Available
          </button>
        </div>
      </div>
    </div>
  );
}
